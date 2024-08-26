
import { test, expect } from "@playwright/experimental-ct-react";
import App867 from "../example/App867.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App867 />);
  await expect(component).toContainText("Learn React");
});
