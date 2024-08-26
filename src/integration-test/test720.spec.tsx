
import { test, expect } from "@playwright/experimental-ct-react";
import App720 from "../example/App720.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App720 />);
  await expect(component).toContainText("Learn React");
});
