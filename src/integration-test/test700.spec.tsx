
import { test, expect } from "@playwright/experimental-ct-react";
import App700 from "../example/App700.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App700 />);
  await expect(component).toContainText("Learn React");
});
