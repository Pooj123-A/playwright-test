
import { test, expect } from "@playwright/experimental-ct-react";
import App80 from "../example/App80.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App80 />);
  await expect(component).toContainText("Learn React");
});
