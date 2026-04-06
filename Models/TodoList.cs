using Advanced_TODO_list.Models;

namespace Advanced_TODO_list; 
public class TodoList
{
    public string Name { get; set; } = "Новий список";

    public List<TodoItem> Items { get; set; } = new();
}
