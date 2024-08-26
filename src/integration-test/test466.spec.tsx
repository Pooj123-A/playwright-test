
import { test, expect } from "@playwright/experimental-ct-react";
import App466 from "../example/App466.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App466 />);
  await expect(component).toContainText("Learn React");
});
