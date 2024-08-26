
import { test, expect } from "@playwright/experimental-ct-react";
import App129 from "../example/App129.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App129 />);
  await expect(component).toContainText("Learn React");
});
