
import { test, expect } from "@playwright/experimental-ct-react";
import App1982 from "../example/App1982.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1982 />);
  await expect(component).toContainText("Learn React");
});
