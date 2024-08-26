
import { test, expect } from "@playwright/experimental-ct-react";
import App875 from "../example/App875.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App875 />);
  await expect(component).toContainText("Learn React");
});
