import { useMutation } from '@tanstack/react-query';

import { showErrorToast, showSuccessToast } from '@/components/ui/toast';

import { invalidateQueries } from '@/lib/react-query';

import { createBlog } from '../actions';
import { type CreateBlogDTO } from '../types';

export const useCreateBlog = () => {
  return useMutation({
    mutationKey: ['create_blog'],
    mutationFn: (params: CreateBlogDTO) => createBlog(params),
    async onSuccess() {
      showSuccessToast('操作成功');
      await invalidateQueries();
    },
    onError(error) {
      showErrorToast(`操作失败: ${error.message}`);
    },
  });
};
