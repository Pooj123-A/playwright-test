
import { test, expect } from "@playwright/experimental-ct-react";
import App684 from "../example/App684.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App684 />);
  await expect(component).toContainText("Learn React");
});
