using System.Collections.Generic;
using System.Linq;
using CloneKabum.API.Models;

namespace CloneKabum.API.Repositories
{
    public class UserRepository
    {
        private static int _nextInt = 2;

        public static IList<User> Users = new List<User>
        {
            new User
            {
                Id = 1,
                Email = "zubemluano@gmail.com",
                Name = "Luano",
                Password = "loop",
                ImageUrl = "https://media-exp1.licdn.com/dms/image/C4E03AQEU3PdkA8XZRA/profile-displayphoto-shrink_200_200/0/1641794881830?e=1647475200&v=beta&t=ddDT3O4-45ysFiPqAPj5Xwj1GTHqNQlYzzmbXJsPSWU"
            },
        };

        public static void AddUser(User user)
        {
            user.Id = _nextInt++;
            Users.Add(user);
        }

        public User GetByEmail(string email)
        {
            return Users.Where(x => x.Email.ToLower() == email.ToLower())
                .FirstOrDefault();
        }

        public User Get(int id) => Users.FirstOrDefault(u => u.Id == id);
    }
}