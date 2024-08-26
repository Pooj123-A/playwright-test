
import { test, expect } from "@playwright/experimental-ct-react";
import App855 from "../example/App855.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App855 />);
  await expect(component).toContainText("Learn React");
});
