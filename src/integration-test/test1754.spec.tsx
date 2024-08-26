
import { test, expect } from "@playwright/experimental-ct-react";
import App1754 from "../example/App1754.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1754 />);
  await expect(component).toContainText("Learn React");
});
