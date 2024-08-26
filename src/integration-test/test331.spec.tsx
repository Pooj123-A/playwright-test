
import { test, expect } from "@playwright/experimental-ct-react";
import App331 from "../example/App331.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App331 />);
  await expect(component).toContainText("Learn React");
});