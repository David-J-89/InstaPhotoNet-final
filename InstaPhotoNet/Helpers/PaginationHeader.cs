using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstaPhotoNet.Helpers
{
    public class PaginationHeader
    {
        public int CurrentPage { get; set; }
        public int ItemsPerPage { get; set; }
        public int TotalItems { get; set; }
        public int TotalPages { get; set; }

        public PaginationHeader(int currentPage, int itemsPerPage, int totalItems, int totalPages) //to be passed back in the http response header.
        {
            this.CurrentPage = currentPage;
            this.ItemsPerPage = itemsPerPage;
            this.TotalItems = totalItems;
            this.TotalPages = totalPages;
        }
    }
}
