
import { test, expect } from "@playwright/experimental-ct-react";
import App636 from "../example/App636.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App636 />);
  await expect(component).toContainText("Learn React");
});
