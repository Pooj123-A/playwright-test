
import { test, expect } from "@playwright/experimental-ct-react";
import App2889 from "../example/App2889.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2889 />);
  await expect(component).toContainText("Learn React");
});
