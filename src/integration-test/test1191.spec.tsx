
import { test, expect } from "@playwright/experimental-ct-react";
import App1191 from "../example/App1191.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1191 />);
  await expect(component).toContainText("Learn React");
});
