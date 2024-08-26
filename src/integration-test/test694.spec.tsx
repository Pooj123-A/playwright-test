
import { test, expect } from "@playwright/experimental-ct-react";
import App694 from "../example/App694.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App694 />);
  await expect(component).toContainText("Learn React");
});
