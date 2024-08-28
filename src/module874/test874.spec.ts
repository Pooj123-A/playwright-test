
import { test, expect } from "@playwright/experimental-ct-react";
import App874 from "./App874.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App874 />);
  await expect(component).toContainText("Learn React");
});
