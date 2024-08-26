
import { test, expect } from "@playwright/experimental-ct-react";
import App2966 from "../example/App2966.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2966 />);
  await expect(component).toContainText("Learn React");
});
