
import { test, expect } from "@playwright/experimental-ct-react";
import App863 from "../example/App863.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App863 />);
  await expect(component).toContainText("Learn React");
});
