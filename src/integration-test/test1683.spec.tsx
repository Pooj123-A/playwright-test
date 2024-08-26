
import { test, expect } from "@playwright/experimental-ct-react";
import App1683 from "../example/App1683.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1683 />);
  await expect(component).toContainText("Learn React");
});
