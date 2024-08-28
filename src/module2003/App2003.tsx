
import { test, expect } from "@playwright/experimental-ct-react";
import App2003 from "./App2003.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2003 />);
  await expect(component).toContainText("Learn React");
});
