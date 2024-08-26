
import { test, expect } from "@playwright/experimental-ct-react";
import App760 from "../example/App760.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App760 />);
  await expect(component).toContainText("Learn React");
});
