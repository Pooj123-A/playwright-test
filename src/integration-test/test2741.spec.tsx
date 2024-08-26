
import { test, expect } from "@playwright/experimental-ct-react";
import App2741 from "../example/App2741.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2741 />);
  await expect(component).toContainText("Learn React");
});
