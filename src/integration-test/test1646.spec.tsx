
import { test, expect } from "@playwright/experimental-ct-react";
import App1646 from "../example/App1646.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1646 />);
  await expect(component).toContainText("Learn React");
});
