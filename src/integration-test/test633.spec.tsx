
import { test, expect } from "@playwright/experimental-ct-react";
import App633 from "../example/App633.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App633 />);
  await expect(component).toContainText("Learn React");
});
