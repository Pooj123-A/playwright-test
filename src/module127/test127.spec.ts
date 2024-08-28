
import { test, expect } from "@playwright/experimental-ct-react";
import App127 from "./App127.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App127 />);
  await expect(component).toContainText("Learn React");
});
