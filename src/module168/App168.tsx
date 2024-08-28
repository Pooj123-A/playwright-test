
import { test, expect } from "@playwright/experimental-ct-react";
import App168 from "./App168.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App168 />);
  await expect(component).toContainText("Learn React");
});
