
import { test, expect } from "@playwright/experimental-ct-react";
import App1604 from "../example/App1604.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1604 />);
  await expect(component).toContainText("Learn React");
});
