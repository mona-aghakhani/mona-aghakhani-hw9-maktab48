getPagination("#table-id");
function getPagination(table) {
  let lastPage = 1;
  $("#maxRows").on("change", function (evt) {
      lastPage = 1;
            // li haye beyne dovomi az samte chap va dovomi a akhar remove beshe(faqat jadid  ha)
      $(".pagination").find("li").slice(1, -1).remove();
      //   console.log($(".pagination").find("li"));
      //   console.log($(".pagination").find("li").slice(1, -1).remove());
      //   console.log( $(".pagination"));
      let trnum = 0; // counter
      let maxRows = parseInt($(this).val()); //tedad row haye vorudi
      let totalRows = $(table + " tbody tr").length;
          // console.log(trList);
      // console.log(trList[1]);
      // console.log(totalRows);
// each TR in  table and not the header 
      $(table + " tr:gt(0)").each(function () {
      // roye hame ye tr ha halqe mizanim va harbar b shomare tr yeki ezafe mikonim
        // agar az addad select shode bishtar shod hide mikonim
        trnum++; // Start Counter
        if (trnum > maxRows) { 
          $(this).hide(); 
        }
        if (trnum <= maxRows) {
          $(this).show();
        } 
      }); 
      //  peyda kardane tedade safahat
      if (totalRows > maxRows) {
        let pagenum = Math.ceil(totalRows / maxRows); 
        //	numbers of pages
        for (let i = 1; i <= pagenum; ) {
         // be tedad safahati ke niaze li append mikonim
         $(".pagination #prev")
         .before('<li data-page="' + i + '"><span>' + i++ + "</span></li>")
         .show();
        } 
      } 
      $('.pagination [data-page="1"]').addClass("active"); // add active class to the first li
      $(".pagination li").on("click", function (evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();
        let pageNum = $(this).attr("data-page"); 
        console.log(pageNum);
        console.log(lastPage);
        let maxRows = parseInt($("#maxRows").val()); 

        if (pageNum == "prev") {
            // ghablesh hichi nis
          if (lastPage == 1) {
            return;
          }
          // pagenum beshe safe qabli -1
          pageNum = --lastPage;
          // console.log(--lastPage);
        }
        if (pageNum == "next") {
          if (lastPage == $(".pagination li").length - 2) {
            return;
          }
          pageNum = ++lastPage;
        }

        lastPage = pageNum;
        let trIndex = 0; // reset tr counter
        $(".pagination li").removeClass("active"); 
        $('.pagination [data-page="' + lastPage + '"]').addClass("active"); 
        // $(this).addClass('active');					
        limitPagging();
        $(table + " tr:gt(0)").each(function () {
          
          trIndex++; // tr index counter
          // if tr index gt maxRows*pageNum or lt maxRows*pageNum-maxRows fade if out
          if (
            trIndex > maxRows * pageNum ||
            trIndex <= maxRows * pageNum - maxRows
          ) {
            $(this).hide();
          } else {
            $(this).show();
          } 
        }); 
      }); 
      limitPagging();
    })
    .val(5)
    .change();

    // baraye neshun dadane avale safe
  // end of on select change

  // END OF PAGINATION
}

function limitPagging() {
  // alert($('.pagination li').length)

  if ($(".pagination li").length > 7) {
    if ($(".pagination li.active").attr("data-page") <= 3) {
      $(".pagination li:gt(5)").hide();
      $(".pagination li:lt(5)").show();
      $('.pagination [data-page="next"]').show();
    }
    if ($(".pagination li.active").attr("data-page") > 3) {
      $(".pagination li:gt(0)").hide();
      $('.pagination [data-page="next"]').show();
      for (
        let i = parseInt($(".pagination li.active").attr("data-page")) - 2;
        i <= parseInt($(".pagination li.active").attr("data-page")) + 2;
        i++
      ) {
        $('.pagination [data-page="' + i + '"]').show();
      }
    }
  }
}

$(function () {
  // append id number 
  $("table tr:eq(0)").prepend("<th> ID </th>");

  let id = 0;

  $("table tr:gt(0)").each(function () {
    id++;
    $(this).prepend("<td>" + id + "</td>");
  });
});

