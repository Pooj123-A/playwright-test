
import { test, expect } from "@playwright/experimental-ct-react";
import App8 from "../example/App8.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App8 />);
  await expect(component).toContainText("Learn React");
});
