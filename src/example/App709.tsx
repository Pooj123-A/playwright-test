
import { test, expect } from "@playwright/experimental-ct-react";
import App709 from "./App709.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App709 />);
  await expect(component).toContainText("Learn React");
});
