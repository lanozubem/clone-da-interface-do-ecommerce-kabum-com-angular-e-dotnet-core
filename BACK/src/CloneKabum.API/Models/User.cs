namespace CloneKabum.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public int Type { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string RePassword { get; set; }
    }
}