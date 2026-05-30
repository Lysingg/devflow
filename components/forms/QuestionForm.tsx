"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuestionSchema } from "@/lib/validations";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const QuestionForm = () => {
  const form = useForm({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });
  const handleSubmitQuestion = () => {};
  return (
    <Form {...form}>
      <form className="flex w-full flex-col gap-10" onSubmit={form.handleSubmit(handleSubmitQuestion)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-14 border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular text-light500 mt-2.5">
                Be specific and imagine you’re asking a question to another person.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Detailed explanation of your problem <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>Editor</FormControl>
              <FormDescription className="body-regular text-light500 mt-2.5">
                Introduce the problem and expand on what you put in the title.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Tags <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <div>
                  <Input
                    className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-14 border"
                    placeholder="Add tags to describe what your question is about. E.g. JavaScript, React, CSS"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormDescription className="body-regular text-light500 mt-2.5">
                Add up to 5 tags to describe what your question is about. E.g. JavaScript, React, CSS. You need to press
                enter to add a tag.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-16 flex justify-end">
          <Button type="submit" className="primary-gradient text-light-900! w-fit">
            Ask A Question
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuestionForm;
