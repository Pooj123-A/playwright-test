
import { test, expect } from "@playwright/experimental-ct-react";
import App1007 from "../example/App1007.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1007 />);
  await expect(component).toContainText("Learn React");
});
