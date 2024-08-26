
import { test, expect } from "@playwright/experimental-ct-react";
import App1876 from "../example/App1876.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1876 />);
  await expect(component).toContainText("Learn React");
});
