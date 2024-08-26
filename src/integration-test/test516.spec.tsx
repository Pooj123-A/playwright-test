
import { test, expect } from "@playwright/experimental-ct-react";
import App516 from "../example/App516.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App516 />);
  await expect(component).toContainText("Learn React");
});
