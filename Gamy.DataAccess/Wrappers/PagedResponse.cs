using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Enoca.DataAccess.Wrappers
{
    public class PagedResponse<T> : Response<T>
    {
        public IEnumerable<T> pagedData;
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public int TotalPages { get; set; }
        public int TotalRecords { get; set; }

        public PagedResponse(T data, int pageNumber, int pageSize)
        {
            this.PageNumber = pageNumber;
            this.PageSize = pageSize;
            this.Data = data;
            this.Message = null;
            this.Succeeded = true;
            this.Errors = null;
        }

        public PagedResponse(IEnumerable<T> pagedDataProject, int pageNumber, int pageSize)
        {
            this.pagedData = pagedDataProject;
            PageNumber = pageNumber;
            PageSize = pageSize;
        }


    }
}
