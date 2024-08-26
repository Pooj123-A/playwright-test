
import { test, expect } from "@playwright/experimental-ct-react";
import App2675 from "../example/App2675.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2675 />);
  await expect(component).toContainText("Learn React");
});
