
import { test, expect } from "@playwright/experimental-ct-react";
import App310 from "../example/App310.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App310 />);
  await expect(component).toContainText("Learn React");
});
