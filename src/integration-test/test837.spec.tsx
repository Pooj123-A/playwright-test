
import { test, expect } from "@playwright/experimental-ct-react";
import App837 from "../example/App837.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App837 />);
  await expect(component).toContainText("Learn React");
});
