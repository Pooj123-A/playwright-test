
import { test, expect } from "@playwright/experimental-ct-react";
import App268 from "./App268.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App268 />);
  await expect(component).toContainText("Learn React");
});
