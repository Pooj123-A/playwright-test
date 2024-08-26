
import { test, expect } from "@playwright/experimental-ct-react";
import App2646 from "../example/App2646.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2646 />);
  await expect(component).toContainText("Learn React");
});
