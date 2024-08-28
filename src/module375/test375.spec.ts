
import { test, expect } from "@playwright/experimental-ct-react";
import App375 from "./App375.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App375 />);
  await expect(component).toContainText("Learn React");
});
