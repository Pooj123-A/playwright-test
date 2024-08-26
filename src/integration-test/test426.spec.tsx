
import { test, expect } from "@playwright/experimental-ct-react";
import App426 from "../example/App426.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App426 />);
  await expect(component).toContainText("Learn React");
});
