
import { test, expect } from "@playwright/experimental-ct-react";
import App624 from "../example/App624.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App624 />);
  await expect(component).toContainText("Learn React");
});
