
import { test, expect } from "@playwright/experimental-ct-react";
import App2819 from "./App2819.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2819 />);
  await expect(component).toContainText("Learn React");
});
