import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='p-2'>
      <h3 className='text-2xl font-semibold'>Welcome Home!</h3>
      <Button asChild>
        <Link to='/posts'>Posts</Link>
      </Button>
    </div>
  );
}
