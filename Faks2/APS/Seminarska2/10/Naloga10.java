import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Naloga10 {
    public static Naloga10 naloga10 = new Naloga10();

    public static TreeNode drevo;
    public static TreeNode implementiranoDrevo;

    public class TreeNode {
        public TreeNode [] subnodes;
        public char c;

        public TreeNode(char c) {
            this.c = c;
        }
    }

    public static boolean Load(String path) {
        try (BufferedReader br = new BufferedReader(new FileReader(path))) {

            int n = Integer.parseInt(br.readLine());
            String [] str = new String [n];

            for(int i = 0; i < n; i++)
                str[i] = br.readLine();

            implementiranoDrevo = addRecursive(str, 0);
            
            n = Integer.parseInt(br.readLine());
            str = new String [n];

            for(int i = 0; i < n; i++)
                str[i] = br.readLine();

            drevo = addRecursive(str, 0);
            
            
            return true;
        } catch (IOException e) {
            System.out.println("File not found!");
            return false;
        }
    }

    private static TreeNode addRecursive(String[] str, int line) {
        String [] hahaString = str[line].split(",");

        TreeNode node = naloga10.new TreeNode(hahaString[1].charAt(0));

        int n = hahaString.length - 2;

        if(n > 0) {
            node.subnodes = new TreeNode [n];

            for(int i = 0; i < n; i++)
                node.subnodes[i] = addRecursive(str, Integer.parseInt(hahaString[2 + i]) - 1);
        }

        return node;
    }

    private static int searchForNodes(TreeNode tree, TreeNode impTree) {
        int n = 0;

        if(isSubtree(tree, impTree))
            n += 1;

        if(tree.subnodes != null){                    
            for(TreeNode t: tree.subnodes)
                n += searchForNodes(t, impTree);
        }

        return n;
    }


    private static boolean isSubtree(TreeNode tree1, TreeNode tree2) {
        //tree 1 je vedno vecje drevo, v katerem iscemo
        if(tree1.c == tree2.c) {
            if(tree1.subnodes == null && tree2.subnodes != null)
                return false;
            if(tree2.subnodes == null)
                return true;
            if(tree1.subnodes.length == tree2.subnodes.length) {
                for(int i = 0; i < tree1.subnodes.length; i++) {
                    if(!isSubtree(tree1.subnodes[i], tree2.subnodes[i]))
                        return false;
                }
                return true;
            }
        }

        return false;
    }

    public static void main(String[] args) {
        if(Load(args[0])) {
            try{
                BufferedWriter buffer = new BufferedWriter(new FileWriter(args[1]));
                buffer.write(Integer.toString(searchForNodes(drevo, implementiranoDrevo)));
                buffer.close();
            } catch (IOException e) {
                System.out.println("Cannot write to file!");
                return;
            }
        }
    }


}
