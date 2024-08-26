
import { test, expect } from "@playwright/experimental-ct-react";
import App1227 from "../example/App1227.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1227 />);
  await expect(component).toContainText("Learn React");
});
